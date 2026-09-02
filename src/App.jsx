
import "@mantine/core/styles.css";
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import { AuthLayout } from "./pages/auth/AuthLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ReceiptsPage } from "./pages/ReceiptsPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { TagsPage } from "./pages/TagsPage";
import { AppLayout } from "./pages/AppLayout";

export default function App() {
	return (
		<MantineProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<AuthLayout />}  >
						<Route path="login" element={<LoginPage />} />
						<Route path="register" element={<RegisterPage />} />
					</Route>

					<Route element={<AppLayout />}>
						<Route path="/" element={<ReceiptsPage />} />
						<Route path="/categories" element={<CategoriesPage />} />
						<Route path="/tags" element={<TagsPage />} />
					</Route>

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
	);
}
