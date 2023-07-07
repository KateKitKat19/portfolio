export const Container = (props: any) => {
  return (
    <div className="border-2 border-lime-600 flex flex-col items-center container">
      {props.children}
    </div>
  );
};
