// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Ascii from "./shared/ascii.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Q&A">
      <Ascii
        art={`
          QQQQQQQQQ                 &&&&&&&&&&                        AAA               
        QQ:::::::::QQ              &::::::::::&                      A:::A              
      QQ:::::::::::::QQ           &::::&&&:::::&                    A:::::A             
     Q:::::::QQQ:::::::Q         &::::&   &::::&                   A:::::::A            
     Q::::::O   Q::::::Q         &::::&   &::::&                  A:::::::::A           
     Q:::::O     Q:::::Q          &::::&&&::::&                  A:::::A:::::A          
     Q:::::O     Q:::::Q          &::::::::::&                  A:::::A A:::::A         
     Q:::::O     Q:::::Q           &:::::::&&                  A:::::A   A:::::A        
     Q:::::O     Q:::::Q         &::::::::&   &&&&            A:::::A     A:::::A       
     Q:::::O     Q:::::Q        &:::::&&::&  &:::&           A:::::AAAAAAAAA:::::A      
     Q:::::O  QQQQ:::::Q       &:::::&  &::&&:::&&          A:::::::::::::::::::::A     
     Q::::::O Q::::::::Q       &:::::&   &:::::&           A:::::AAAAAAAAAAAAA:::::A    
     Q:::::::QQ::::::::Q       &:::::&    &::::&          A:::::A             A:::::A   
      QQ::::::::::::::Q        &::::::&&&&::::::&&       A:::::A               A:::::A  
        QQ:::::::::::Q          &&::::::::&&&::::&      A:::::A                 A:::::A 
          QQQQQQQQ::::QQ          &&&&&&&&   &&&&&     AAAAAAA                   AAAAAAA
                  Q:::::Q                                                               
                   QQQQQQ                                                               
                                              `}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
