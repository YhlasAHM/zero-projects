import * as yup from "yup";
import { useValidSchmsConsts } from "./useValidSchmsConsts";


export const useValidSchema = () => {

  const {
    nameReqValidSchema,
    descOptValidSchema,
    guidReqValidSchema,
    contOptValidSchema,
    numWithDotOptValidSchema,
    numReqValidSchema,
    numrequired,
  } = useValidSchmsConsts();


  const AttendanceValid = yup.object({
    attendance_id: numReqValidSchema
  });

  return {
    AttendanceValid
  }

}