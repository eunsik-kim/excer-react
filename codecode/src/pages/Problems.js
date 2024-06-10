import React, { useEffect, useState } from "react";
import MakeTable from "components/specific/MakeTable";
import Bodybox from "components/common/Bodybox";
import Roundbox from "components/common/Roundbox";
import GetProblem from "services/GetProblem";
import InputModal from "../components/specific/InputModal";
import { useNavigate } from "react-router-dom"
const dummyData = {
  code: "200",
  message: "Success",
  data: {
    posts: [
      {
        id: 1,
        title: "Two Sum",
        is_success: true,
        is_review: false,
        source: "leet",
        link: "https://leetcode.com/problems/two-sum/",
        updated_at: "2024-06-07T12:30:00Z"
      },
      {
        id: 2,
        title: "정ㅋ벅ㅋ",
        is_success: false,
        is_review: false,
        source: "백준",
        link: "https://www.acmicpc.net/problem/1237",
        updated_at: "2024-06-08T12:30:00Z"
      },
    ]
  }
};

const Problem = () => {
  const PROBLEM_TABLE_TITLE = ['문제 번호', '제목', '해결', '복습', '출처', '날짜', '삭제'];
  const SELECT_KEYS = ['id', 'title', 'is_success',  'is_review', 'source', 'updatedAt']; // first key should be id 
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await GetProblem("");
        if (fetchedData) {
          setData(fetchedData);
        } else {
          navigate('/');
        }
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []); 

  const selectedData = !data ? null : data.data ? data.data.map(post => (
    SELECT_KEYS.map((key) => {
        if (key === 'updatedAt')
          return post[key] ? post[key].split('T')[0] : "없음"
        else if (key === 'is_success' || key === 'is_review') 
          return post[key] ? 'O' : 'X'
        return post[key];
      }
    )
  )) : null;

  return (
    <Bodybox>
      <Roundbox>
        <MakeTable data={selectedData} titles={PROBLEM_TABLE_TITLE} isLoading={isLoading}/>
        <InputModal />
      </Roundbox>
    </Bodybox>
  )
}
export default Problem;