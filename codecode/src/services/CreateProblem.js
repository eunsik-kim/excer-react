import axios from "./AxiosConfig";
import { postUrl } from "./Urlconfig";

const CreateProblem = async (data) => {
  console.log(data);
  try {    
    const response = await axios.post(postUrl, data);
    console.log(response);
  } catch (e) {
    const emsg = (e.response?.data?.message || 'Create 요청 실패!'); // 에러 메시지 설정
    console.log(e);
    alert(emsg);
    return false;
  }; 
};

export default CreateProblem;