import React from "react";
import styled from 'styled-components'
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import ErrorMessage from "../components/ErrorMessage";
import SemanticLoader from "../components/SemanticLoader";
import Friends from "../components/Friends";

export default function Things() {

  const { data:things, error, loading } = useAxiosOnMount('/api/things')

  if(error) return <ErrorMessage error={error} header={"Did not load!"} />
  if(loading) return <SemanticLoader />

  return (
    <div>
      <h1>Things</h1>
      <Text>Styled Test</Text>
      <p>{JSON.stringify(things)}</p>
      <Friends />
    </div>
  );
}

const Text = styled.p`
    color: red;
`