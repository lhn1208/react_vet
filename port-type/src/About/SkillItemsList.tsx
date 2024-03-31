interface Props{
    readonly skill?:string,
    readonly desc?:string;
  }
export const SkillItemList = ({skill,desc}:Props) => {
    return (
        <li>
            <div className="front s1 bounce animated"><span>{skill}</span></div>
            <div className="back"><span>{desc}</span></div>
           
        </li>
    )
}