import React from 'react';
import {
  defaultChecked,
  Editable,
  EditableTextarea,
  EditablePreview,
  Checkbox,
} from '@chakra-ui/react'
import Roundbox from 'components/common/Roundbox';

const dataExample = `A. 아이디어
...

B. 해결방법
...`;

const NoteBox = ({noteData, noteHandler, h, ...rest}) => {
  return (
    <>
      <Roundbox mb="3">
        <Checkbox mr={3} onChange={() => noteHandler.handleissuccess(!noteData.IsSuccess)} 
          defaultChecked = {noteData.IsSuccess}>성공</Checkbox>
        <Checkbox onChange={() => noteHandler.handleisreview(!noteData.Is_Review)} 
          defaultChecked = {noteData.IsReview}>나중에 또 풀기</Checkbox>
      </Roundbox>
      <Editable defaultValue={noteData.note} placeholder={dataExample} {...rest}>
        <EditablePreview />
        <EditableTextarea h={h} onChange = {noteHandler.handlenote}/>
      </Editable>
    </>
  );
};

export default NoteBox;