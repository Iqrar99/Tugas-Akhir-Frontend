import React, { useState } from "react";
import {
  Button,
  Dropdown,
  MenuProps,
  message,
  Select,
  Typography,
  UploadFile,
  UploadProps,
} from "antd";
import { TrainImageContainer } from "./styles";
import Upload, { RcFile } from "antd/es/upload";
import { UploadOutlined, DownOutlined } from "@ant-design/icons";
import { listLabel } from "./listLabel";
import Header from "../../components/Header";

const TrainImage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  const formData = new FormData();

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList?.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  const handleUpload = () => {
    fileList.forEach((file) => {
      formData.append("zip_file", file as RcFile);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("http://35.223.12.18:8000/api/food/train/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.success("Upload Success");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const labels = listLabel.map((label) => ({
    value: label,
    label: label,
  }));

  const handleChange = (value: string) => {
    formData.delete("file_label");
    formData.append("file_label", value);
  };

  return (
    <TrainImageContainer>
      <Header />
      <h2>Submit Gambar baru untuk dilatih ke dalam model</h2>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>

      <Select
        defaultValue="Select Label"
        style={{ width: 250 }}
        options={labels}
        onChange={handleChange}
      />

      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </TrainImageContainer>
  );
};

export default TrainImage;
