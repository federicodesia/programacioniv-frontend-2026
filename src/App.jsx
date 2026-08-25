
import "@mantine/core/styles.css";
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import { AuthLayout } from "./pages/auth/AuthLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
	return (
		<MantineProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<AuthLayout />}  >
						<Route path="login" element={<LoginPage />} />
						<Route path="register" element={<RegisterPage />} />
					</Route>

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
	);
}
