package core

type N4chanError struct {
	IsN4chanError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewN4chanError(code string, msg string, ctx *Context) *N4chanError {
	return &N4chanError{
		IsN4chanError: true,
		Sdk:              "N4chan",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *N4chanError) Error() string {
	return e.Msg
}
