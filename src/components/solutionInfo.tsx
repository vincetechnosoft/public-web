interface Props {
  id: string;
  title: string;
  discription: string;
  capabalities: string[];
  iconPath: string;
}

export type SolutionInfo = Props;

const SolutionInfo: React.FC<Props> = ({
  capabalities,
  discription,
  iconPath,
  id,
  title,
}) => {
  return (
    <div className="typography">
      <div id={id} className="items-center md:flex">
        <img
          src={iconPath}
          alt="distributor"
          className="mr-10 h-24 w-24 rounded-lg ring-1 ring-offset-2"
        />
        <div className="w-full">
          <h1>{title}</h1>
          <p>{discription}</p>
        </div>
      </div>
      <h2>Capabalities</h2>
      <ul>
        {capabalities.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
};
export default SolutionInfo;
