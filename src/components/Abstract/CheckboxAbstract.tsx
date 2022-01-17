import React, {ReactElement, useCallback, useEffect, useState} from "react";

interface Props {
   setElements : any;
   listElements: any;
}

const CheckboxAbstract: React.ComponentType<Props> = ({
   setElements,
   listElements,
}) => {

   /*******************************************************************************************************************
    *                                          STATE
    ******************************************************************************************************************/

   const [body, setBody] = useState<ReactElement>(<></>);
   const [tmpData, setTmpData] = useState<number[]>([]);

   /*******************************************************************************************************************
    *                                          CALLBACK
    ******************************************************************************************************************/

   const onChange = useCallback((e:any) => {
       if (e.target.checked) {
           setTmpData([...tmpData, parseInt(e.target.value)]);
       } else {
           setTmpData(tmpData.filter((id) => id !== parseInt(e.target.value)));
       }
   }, [tmpData]);

   useEffect(() => {
       setElements(
           tmpData
       )
   }, [setElements, tmpData]);

   /*******************************************************************************************************************
    *                                          EFFECT
    ******************************************************************************************************************/

   useEffect(() => {
      if (listElements?.length > 1) {
         setBody(
             listElements.map((e : any) => {
                return (
                     <div className="form-check" key={e.id}>
                         <input className="form-check-input" type="checkbox" value={e.id} name={e.level} id="flexCheckDefault" onChange={ e => onChange(e) } />
                         <label className="form-check-label first-letter-capitalize" htmlFor="flexCheckDefault">
                             {e.level}
                         </label>
                     </div>
                )
             })
         );
      }
   }, [listElements, onChange])

   /*******************************************************************************************************************
    *                                          RENDER
    ******************************************************************************************************************/

   return (
       <>
          {body}
       </>
   )
};

export default CheckboxAbstract;