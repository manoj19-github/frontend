const useSetCookie = () => {
  const setCookie = ({
    cname,
    cvalue,
    noOfDays = 0,
  }: {
    cname: string;
    cvalue: string;
    noOfDays: number;
  }) => {
    const d = new Date();
    d.setTime(d.getTime() + noOfDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
  return setCookie;
};

export default useSetCookie;
