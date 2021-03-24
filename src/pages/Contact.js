import React, { Component } from "react";
import styled from 'styled-components';
import "./Pages.css"

const FormDiv = styled.div`
  margin: 0 auto;
  width: 75%;
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`


class Contact extends Component {

    render() {
      return (
        <div>
          <p></p>
  
          <FormDiv>
            <form action="mailto:michael.j.oconnor@gaarmageddon.com" method="post" enctype="text/plain">
              <div>
                <FormLabel>Name:</FormLabel>
                <FormInput type="text" name="name" />
              </div>
              <div>
                <FormLabel>Email:</FormLabel>
                <FormInput type="text" name="_replyto" />
              </div>
              <div>
                <FormLabel>Comment:</FormLabel>
                <CommentInput name="comment" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </FormDiv>
  
            <br></br>

          <p>Email me directly at <a href="mailto:michael.j.oconnor@gaarmageddon.com" target="_blank" rel="noreferrer"><strong>michael.j.oconnor@gaarmageddon.com</strong></a></p>
  
    
        </div>
      );
    }
  }

  export default Contact;