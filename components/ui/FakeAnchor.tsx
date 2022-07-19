import { PropsWithChildren } from "react"

function FakeAnchor(props: PropsWithChildren<{}>) {
  return <span className="hover:underline" {...props} />
}

export default FakeAnchor