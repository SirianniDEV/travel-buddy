import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";


const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: inherit;
  border-bottom: 1px solid #f5f5f5;
  font-family: "Montserrat", sans-serif;

`;

const ProfilePhoto = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #f5f5f5;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: bold;
  &:hover {
    color: #FAD690;
  }
`;

const AddReviewButton = styled.button`
  background-color: #f5f5f5;
  color: #000000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  margin: 20px;
  padding: 15px 20px 15px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  &:hover {
    background-color: #FAD690;
    color: #000000;
  }
`;

const Navbar = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const navigation = [
        { name: "new", href: "/addReview", current: router.pathname === "/addReview" },
    ];

  return (
      <NavContainer>
          <NavLinksContainer>
              <Link href="/auth">
                  <ProfilePhoto src="/profile-icon.svg" alt="Profile photo" width={50} height={50} />
              </Link>
              <NavLink href="/explore">Explore</NavLink>
          </NavLinksContainer>
          <Link href="/addReview">
              <AddReviewButton>Add Review</AddReviewButton>
          </Link>
            <Link href="/">
                <Image src="/logo.svg" alt="Travel Buddy Logo" width={150} height={50} />
            </Link>
      </NavContainer>
  );
};

export default Navbar;
