import React, { useState } from "react";
import { Button, Image, Upload } from "antd";
import Typography from "antd/es/typography/Typography";
import { PredictImageContainer, ResultContainer } from "./styles";
import { UploadProps, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ResultPredict } from "../../types/resultPredict";
import Header from "../../components/Header";

const ResultPredictDefault = {
  "image_id": -1,
  "image": "",
  "prediction_class": "",
  "food_recommendation": "",
  "grad_cam_predicted_image_path": ""
}

const PredictImage = () => {
  const [result, setResult] = useState<ResultPredict>(ResultPredictDefault);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const props: UploadProps = {
    name: "image",
    action: "http://127.0.0.1:8000/api/food/predict/",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);

        setLoading(true);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);

        setResult(info?.file?.response || {});
        setLoading(false);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);

        setError(true);
        setLoading(false);
      }
    },
  };

  return (
    <PredictImageContainer>
      <Header />

      <h3>
        Prediksi Gambar Makanan Traditional yang Kamu Temukan
      </h3>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>

      {result.image_id !== -1 && (
        <ResultContainer>
        <h3>Hasil Prediksi</h3>
        <Image src={result?.image || ''} alt='image-result-predict'/>
        <h2>Predicted as: {result?.prediction_class || ''}</h2>

        <h3>This is how the CNN see the image and decide to label it as {result?.prediction_class || ''}</h3>
        <Image src={result?.grad_cam_predicted_image_path} alt='grade-cam' />

        <h3>Also we recommend another food ase on its ingredients</h3>
        <h2>{result?.food_recommendation || ''}</h2>
      </ResultContainer>
      )}
      
    </PredictImageContainer>
  );
};

export default PredictImage;
