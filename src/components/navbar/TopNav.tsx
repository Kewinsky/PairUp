import { Navbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";

const TopNav = () => {
  const memberLinks = [
    { href: "/members", label: "Matches" },
    { href: "/lists", label: "Lists" },
    { href: "/messages", label: "Messages" },
  ];

  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-r from-amethyst via-frenchMauve to-rosePompadour"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-200",
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <GiSelfLove size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-200">PairUp</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        {memberLinks.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <>
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="text-white"
          >
            Login
          </Button>
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            className="text-white"
          >
            Register
          </Button>
        </>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;
