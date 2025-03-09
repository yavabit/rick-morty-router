import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

type FieldType = {
	username: string;
	remember: boolean;
};

export const Login = () => {

	const auth = useAuth()
	const location = useLocation()
	const navigate = useNavigate()

	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		auth.signin(values, () => {
			navigate(location.state?.from || "/", {replace: true})
		})
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: "Please input your username!" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				label={null}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item label={null}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
		</Form>
	);
};
