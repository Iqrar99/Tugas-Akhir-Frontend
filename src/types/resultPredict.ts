export interface ResultPredict {
    image_id: number;
    image: string;
    prediction_class: string;
    food_recommendation: string;
    grad_cam_predicted_image_path: string;
}