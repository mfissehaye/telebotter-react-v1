import React, { useContext, useState, useEffect } from "react";
import TelebotterContext from "../TelebotterContext";
// import install from "@twind/with-react";
// import config from "../../twind.config";
import { inline, tw } from "@twind/core";
// import { tw } from "../../twind";

// install(config);

export interface PageProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  id: string;
}

const Page = (props: PageProps) => {
  const { token } = useContext(TelebotterContext);
  if (!token) throw new Error("Token not found");
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/pages/${props.id}?token=${token}`)
      .then((res) => res.json())
      .then((res) => {
        setHtml(res.html);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: inline(html, { tw }) }}></div>;
};

export default Page;
