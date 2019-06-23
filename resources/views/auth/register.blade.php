@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card register-card">
                <div class="card-header">Cadastre-se</div>

                <div class="card-body">
                    <form class="register-form" method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                <label id="name-label" for="name" class="col-md-4 col-form-label text-md-right">Qual é o seu nome?</label>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                <label id="email-label" for="email" class="col-md-4 col-form-label text-md-right">E-mail</label>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                                <label id="password-label" for="password" class="col-md-4 col-form-label text-md-right">Senha</label>

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                <label id="password-confirm-label" for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirme sua senha</label>

                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="above-btn btn btn-primary">
                                    Confirmar
                                </button>
                            </div>
                        </div>

                          <a class="btn btn-link google-account" href="#">
                            <img src="{{ asset('images/google-logo.png') }}" alt="Google Cadastrar">
                            Cadastrar com o Google

                        </a>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection