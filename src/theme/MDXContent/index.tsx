import React, {useState} from 'react';
import MDXContent from '@theme-original/MDXContent';
import type MDXContentType from '@theme/MDXContent';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof MDXContentType>;

export default function MDXContentWrapper(props: Props): JSX.Element {
  const [attemptedPass, setAttemptedPass] = useState<string>();

  const password: string = props.children?.type?.frontMatter?.password;

  const isBrowser = typeof window !== `undefined`;
  let browserPass = null;

  if (isBrowser) {
    const urlParams = new URLSearchParams(window.location.search);
    browserPass = urlParams.get('pass');
  }

  if (password && password.toString() !== attemptedPass && password.toString() !== browserPass){
    return ( 
        <input type="text" className="passwordProtectedDoc" 
        placeholder="Enter the password" 
        onChange={(e) => setAttemptedPass(e.target.value)}
        />
    )
  } 
  return (
    <>
      <MDXContent {...props} />
    </>
  );
}
