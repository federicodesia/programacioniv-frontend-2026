import { Outlet } from "react-router";
import { Container } from "@mantine/core";
import { Header } from "../components/Header";

export function AppLayout() {
    return (
        <>
            <Header />
            <Container py="64px">
                <Outlet />
            </Container>
        </>
    );
}
