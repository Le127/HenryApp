import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createLectureSchema } from "../../yup";
import { createLecture } from "../../redux/actions/lecturesActions";

import Input from '../Input';
import Loading from '../Loading';
import Select from '../Select';
import { AddLectureWrapper, CreateButton } from './styles';

const AddLectureForm = ({ modalRef, moduleData }) => {

  const { register, handleSubmit, errors, trigger } = useForm({
    resolver: yupResolver(createLectureSchema)
  });

  // TODO: necesito hacer un req para traer los datos del usuario ?
  // const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(createLecture(moduleData._id, data));
    modalRef.current.closeModal();
  };

  if (!moduleData)
    return <Loading />;

  console;

  return (
    <AddLectureWrapper onSubmit={handleSubmit(onSubmit)}>

      <Input
        type="text"
        name="title"
        label="Title"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger("title")}
        error={errors.title?.message}
      />

      <Input
        type="text"
        name="description"
        label="Description"
        required
        autoComplete="off"
        ref={register}
        onChange={() => trigger("description")}
        error={errors.description?.message}
      />

      <Input
        type="text"
        name="imagen"
        label="Image"
        autoComplete="off"
        ref={register}
        onChange={() => trigger("imagen")}
        error={errors.imagen?.message}
      />

      <Input
        type="text"
        name="urlLecture"
        label="Lecture URL"
        autoComplete="off"
        ref={register}
        onChange={() => trigger("urlLecture")}
        error={errors.urlLecture?.message}
      />

      <CreateButton>
        Add Lecture
      </CreateButton>
    </AddLectureWrapper>
  );
};

export default AddLectureForm;
