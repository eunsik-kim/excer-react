import axios from "./AxiosConfig";
import { postUrl } from "./Urlconfig";

const DeleteProblem = async (problem_no) => {
  try {
    const newPostUrl = `${postUrl}/${problem_no}`
    const response = await axios.delete(newPostUrl);
    alert('삭제완료');
  } catch (e) {
    const emsg = (e.response?.data?.message || 'Delete 요청 실패!'); // 에러 메시지 설정
    console.log(e);
    alert(emsg);
  }; 
};

export default DeleteProblem;