import React, {ReactElement, useCallback, useEffect, useState} from "react";

interface Props {
   element : any;
   setElement : (element : string) => void;
   listElements: any;
}

const SelectAbstract: React.ComponentType<Props> = ({
   element,
   setElement,
   listElements,
}) => {

   /*******************************************************************************************************************
    *                                          STATE
    ******************************************************************************************************************/

   const [body, setBody] = useState<ReactElement>(<></>);

   /*******************************************************************************************************************
    *                                          CALLBACK
    ******************************************************************************************************************/

   const onChange = useCallback((e:any) => {
      setElement(e.target.value);
   }, [setElement]);

   const generateLevelSelectViewFunc = useCallback((list: any) => {
      let viewToDisplay:ReactElement;

      if(!element) {
         setElement(list[0].id);
      }

      viewToDisplay = list.map((e : any) => {
         return (
             <option key={e.id} value={e.id}>{e.level}</option>
         )
      })


      return (
          <select className="form-control" id="searchType" onChange={ e => onChange(e) } value={element}>
             {viewToDisplay}
          </select>
      )
   }, [element, setElement, onChange])

   /*******************************************************************************************************************
    *                                          EFFECT
    ******************************************************************************************************************/

   useEffect(() => {
      if (listElements?.length > 1) {
         setBody(generateLevelSelectViewFunc(listElements));
      }
   }, [listElements, generateLevelSelectViewFunc])

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