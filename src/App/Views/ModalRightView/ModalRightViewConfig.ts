import SignInView from '../SignInView/SignInView';
import SignUpView from '../SignUpView/SignUpView';

interface IModalRightData {
    title: string;
//     signInView: typeof SignInView;
//     signUpView: typeof SignUpView;
//
//     [key: string]: string | typeof SignInView | typeof SignUpView;
};

const ModalRightData: IModalRightData = {
    title: 'Вход или регистрация',
    // signInView: SignInView,
    // signUpView: SignUpView,
    // signInData: SignInData,
};

export default ModalRightData;
