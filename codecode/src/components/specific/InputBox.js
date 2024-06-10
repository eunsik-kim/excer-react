import React, { useState } from "react";
import Button from "components/common/Button";
import Roundbox from "components/common/Roundbox";
import NoteBox from "components/specific/NoteBox";
import UpdateProblem from "services/UpdateProblem";
import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Spacer, Flex,
} from '@chakra-ui/react'
import CodeEditor from './CodeEditor';
import useInput from "hooks/useInput";
import { useRecoilValue } from "recoil";
import LoginState from "atoms/LoginState";

const InputBox = ({data, ...rest}) => {
  const [note, handleNote] = useInput(data.note);
  const [IsReview, handleIsReview] = useInput(data.is_review);
  const [IsSuccess, handleIsSuccess] = useInput(data.is_success);

  const noteData = {
    'note': note,
    'isreview': IsReview, 
    'issuccess': IsSuccess,

  }
  const noteHandler = {
    'handlenote': handleNote,
    'handleisreview': handleIsReview,
    'handleissuccess': handleIsSuccess,
  }

  console.log(noteData.note)
  const [language, setLang] = useState(data.language);
  const [code, setCode] = useState(data.code);
  const handleEditorChange = (value) => setCode(value);
  const LoginInfo = useRecoilValue(LoginState);

  return (
    <Roundbox {...rest}>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <Flex>
            <TabList>          
              <Tab>코드</Tab>
              <Tab>노트</Tab>
            </TabList>
            <Spacer/>
            <Button color='teal'px='7px' onClick={() => {UpdateProblem(
              data.id, {...data, ...noteData, 'code': code, 'language': language, 'author': LoginInfo.username}
            )}}>
              저장
            </Button>
        </Flex>
        <TabPanels>
          <TabPanel>
            <CodeEditor code={code} language = {language} setLang = {setLang} 
              handleEditorChange = {handleEditorChange} {...rest}/>
          </TabPanel>
          <TabPanel>
            <NoteBox noteData = {noteData} noteHandler = {noteHandler} {...rest}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Roundbox>
  );
}

export default InputBox;