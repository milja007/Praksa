interface ClientProps {
  params: {
    id: string;
  };
}

const Clinent = ({ params }: ClientProps) => {
  console.log(params);
  return <div>Clinent</div>;
};

export default Clinent;
