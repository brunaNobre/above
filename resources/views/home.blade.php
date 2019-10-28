@extends('layouts.app')

@section('content')

<div id="above-app">

    <meta name="csrf-token" content="{{ csrf_token() }}">
</div>

<script src="{{ asset('js/app.js') }}"></script>

@endsection
