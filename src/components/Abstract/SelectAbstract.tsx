import React, {ReactElement, useCallback, useEffect, useState} from "react";
import axios from "axios";

interface Props {
   element : any;
   setElement : any;
}

const SelectAbstract: React.ComponentType<Props> = ({
   element,
   setElement
}) => {

   /*******************************************************************************************************************
    *                                          STATE
    ******************************************************************************************************************/

   const [body, setBody] = useState<ReactElement>(<></>);
   const [loadDataForm, setLoadDataForm] = useState<boolean>(false);
   const [listElement, setListElement] = useState<[]>([]);

   /*******************************************************************************************************************
    *                                          CALLBACK
    ******************************************************************************************************************/

   const onChange = useCallback((e:any) => {
      setElement(e.target.value);
   }, [setElement]);

   const  generateLevelSelectViewFunc = useCallback((list: any) => {
      let viewToDisplay:ReactElement;

      viewToDisplay = list.map((level : any) => {
         return (
             <option value={level.id}>{level.level}</option>
         )
      })

      return (
          <select className="form-control" id="searchType" onChange={ e => onChange(e) } value={element}>
             <option className="select-text-default" value={undefined} />
             {viewToDisplay}
          </select>
      )
   }, [element, onChange])

   /*******************************************************************************************************************
    *                                          EFFECT
    ******************************************************************************************************************/

   useEffect(() => {
      setLoadDataForm(true);
   }, [setLoadDataForm]);

   useEffect(() => {
      if(loadDataForm) {
         axios
             .get("http://localhost:1030/api/levels")
             .then(response => {
                setListElement(response.data);
             });
         setLoadDataForm(false);
      }
   }, [loadDataForm, setLoadDataForm, listElement]);

   useEffect(() => {
      if (listElement?.length > 1) {
         setBody(generateLevelSelectViewFunc(listElement));
      }
   }, [listElement, generateLevelSelectViewFunc])

   /*******************************************************************************************************************
    *                                          RENDER
    ******************************************************************************************************************/

   return (
       <>
          {body}
       </>
   )
};

export default SelectAbstract;