const Button = ({children,onClick}) => {
  return (
    <div>
        <button className="btn btn-danger btn-lg  px-5 ml-5 " onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button