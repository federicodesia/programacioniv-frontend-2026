
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrivateRoute, PublicRoute } from "./pages/Routes";

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<PublicRoute />} >
							<Route path="/auth" element={<AuthLayout />}  >
								<Route path="login" element={<LoginPage />} />
								<Route path="register" element={<RegisterPage />} />
							</Route>
						</Route>

						<Route element={<PrivateRoute />} >
							<Route element={<AppLayout />}>
								<Route path="/" element={<ReceiptsPage />} />
								<Route path="/categories" element={<CategoriesPage />} />
								<Route path="/tags" element={<TagsPage />} />
							</Route>
						</Route>

						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</MantineProvider>
		</QueryClientProvider>


	);
}
