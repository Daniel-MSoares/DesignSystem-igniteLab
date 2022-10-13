import  { TextInput,TextInputInputProps,TextInputRootsProps }  from './TextInput';
import {Meta,StoryObj} from '@storybook/react'
import {Envelope, Placeholder}from 'phosphor-react'
export default{
    title:'Components/TextInput',
    component:TextInput.Root,
    args:{
     children:[
        <TextInput.Icon>
          <Envelope/>
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your email adress'/>
    
     ]
     
    },
    argTypes:{
      children:{
        table:{
            disable:true,
        }
       }
    }
}as Meta<TextInputRootsProps>
export const Default:StoryObj<TextInputRootsProps>={}
export const WithoutIcon:StoryObj<TextInputRootsProps>={
  args:{
    children:[
       <TextInput.Input placeholder='Type your email adress'/>
   
    ]
    
   }
}
