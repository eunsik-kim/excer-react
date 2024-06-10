import axios from "./AxiosConfig";
import { postUrl } from "./Urlconfig";

const GetProblem = async (problem_no) => {
  try {
    let newPostUrl = postUrl;
    if (problem_no)
      newPostUrl = `${newPostUrl}/${problem_no}`
    const response = await axios.get(newPostUrl);
    console.log(response)
    return response.data
  } catch (e) {
    const emsg = (e.response?.data?.message || 'Get 요청 실패!'); // 에러 메시지 설정
    alert(emsg);
    return false;
  }; 
};

export default GetProblem;