import axios from "./AxiosConfig";
import { postUrl } from "./Urlconfig";

const UpdateProblem = async (problem_no, data) => {
  console.log(data);
  try {
    const newPostUrl = `${postUrl}/${problem_no}`
    const response = await axios.put(newPostUrl, data);
    console.log(response)
  } catch (e) {
    const emsg = (e.response?.data?.message || 'update 요청 실패!'); // 에러 메시지 설정
    console.log(e);
    alert(emsg);
  }; 
};

export default UpdateProblem;