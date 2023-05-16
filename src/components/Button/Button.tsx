import styles from './Button.module.scss'

interface ButtonProps {
	children: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick }: ButtonProps) => (
	<button className={styles.Button} onClick={onClick}>
		{children}
	</button>
)
