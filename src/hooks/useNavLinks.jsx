function useNavLinks(isLoggedIn) {
  const links = [
    {
      componentName: "Home",
      linkName: "/",
    },
    {
      componentName: "Contact",
      linkName: "contact",
    },
    {
      componentName: "Login",
      linkName: "login",
      color: "text-warning",
      float: true,
    },
    {
      componentName: "Logout",
      linkName: "logout",
      color: "text-warning",
      float: true,
    },
    {
      componentName: "Signup",
      linkName: "signUp",
      color: "text-warning",
      float: true,
    },
  ];

  let filteredLinks;
  if (isLoggedIn) {
    filteredLinks = links.filter((link) => {
      return link.componentName !== "Login" && link.componentName !== "Signup";
    });
  } else {
    filteredLinks = links.filter((link) => {
      return link.componentName !== "Logout";
    });
  }
  return filteredLinks;
}

export default useNavLinks;
