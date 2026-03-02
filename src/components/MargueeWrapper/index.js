import MargueeAnimation from "./Animation";

export default function MargueeWrapper({ name }) {
  return (
    <div className="relative py-6 !h-[250px] lg:!h-[300px] overflow-hidden">
      <MargueeAnimation name={name} rotation={-1.5} speed={25} />
      <MargueeAnimation name={name} rotation={-1.5} speed={35} reverse={true} />
      <MargueeAnimation name={name} rotation={-1.5} speed={30} />
    </div>
  );
}
