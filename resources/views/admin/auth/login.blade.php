@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card login-card">
                <div class="card-header">Login da Administradora</div>

                <div class="card-body">
                    <form class="login-form" method="POST" action="{{ route('admin.auth.loginAdmin') }}">
                        @csrf

                        <div class="form-group row">

                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" required autocomplete="email" autofocus>
                                <label id="email-label" for="email" class="col-md-12 col-form-label text-md-right">E-mail ou nome de usuário(a)</label>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>


                        </div>

                        <div class="form-group row">

                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                <label id="password-label" for="password" class="col-md-12 col-form-label text-md-right">Senha</label>

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                        </div>
<!--
                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        Lembrar de mim
                                    </label>
                                </div>
                            </div>
                        </div>
-->
                        <div class="form-group">
                            <div>
                                <button type="submit" class="btn btn-primary above-btn">
                                    Entrar
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link forgot-password" href="{{ route('password.request') }}">
                                        Esqueci a senha
                                    </a>
                                @endif
                            </div>
                        </div>

                       

                    </form>
<!--
                    <p class="login-register-call">
                    Acabou de chegar de marte?
                    <a class="register-link" href=""> Cadastre-se</a>
                    </p> -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection