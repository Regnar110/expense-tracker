import { ReactNode } from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { FieldValueUpdateType } from './store/redux/models/actions.model';
import { ValidationPatterns } from './validationPatterns';


type OptionalStyle = StyleProp<ViewStyle>

export type OnSubmitCallback = (formData:FieldValueUpdateType[], validationResult:Array<ValidationResult> ,isValid: boolean ) => void

interface AdditionalFormSubFields<T = boolean> {
	forgotPasswordRedirect?: T,
	rememberMeCheckbox?: T,
	termsAgreement?: T,
}

export interface ValidationResult {
	field: keyof typeof ValidationPatterns,
	valid: boolean
}
type FieldLiveHints = {
    fieldLiveHints?: boolean;
    hints?: Array<{
        id: keyof typeof ValidationPatterns;
        message: string;
    }>
}

export type FormField = {
	id: keyof typeof ValidationPatterns,
	fieldSpecificProps?: TextInputProps,
	iconRenderer?: () => ReactNode,
	patternError: string
}

export interface FormContextType extends AdditionalFormSubFields, FieldLiveHints {
	sharedFieldProps?: TextInputProps,
	fields: FormField[],
	submitButtonText: string
	onSubmitCallback?: OnSubmitCallback
}

export interface FormThemeType {
	optionalStyles?: {
		form?: OptionalStyle,
		inputsContainer?: OptionalStyle,
		inputWrapper?: OptionalStyle,
		input?: OptionalStyle,
		subFormContainer?: OptionalStyle,
		customCheckbox?: OptionalStyle,
		linkContainer?: OptionalStyle,
		textLink?: OptionalStyle,
		submitButtonContainer?: OptionalStyle,
		submitButton?: OptionalStyle,
		submitButtonText?: OptionalStyle,
	}
}

export type FormType =  FormContextType & FormThemeType & AdditionalFormSubFields & FieldLiveHints