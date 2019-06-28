<?php

namespace App\Http\Controllers;

use App\Moon;
use Illuminate\Http\Request;

class MoonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!Auth::check()) {
            return redirect('/');
        }
        $moons = Moon::all();
        return view('admin.moons_list', compact('moons'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (!Auth::check()) {
            return redirect('/');
        }
        // 1: indica inclusão
        $acao = 1;
        return view('admin.moons_form', compact('acao'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'phase' => 'required|unique:moons|min:2|max:60',
            'description' => 'required',
        ]);
        // obtém os dados do form
        $dados = $request->all();
        $inc = Moon::create($dados);
        if ($inc) {
            return redirect()->route('moons.index')
                ->with('status', $request->phase . ' Incluída!');
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function show(Moon $moon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function edit(Moon $moon)
    {
        if (!Auth::check()) {
            return redirect('/');
        }
        // posiciona no registro a ser alterado e obtém seus dados
        $reg = Moon::find($id);
        $acao = 2;
        return view('admin.moons_form', compact('reg', 'acao'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Moon $moon)
    {
        $this->validate($request, [
            'phase' => ['required', 'unique:moons'],
            'description' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $reg = Moon::find($id);
        // realiza a alteração
        $alt = $reg->update($dados);
        if ($alt) {
            return redirect()->route('moons.index')
                ->with('status', $request->phase . ' Alterada!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Moon  $moon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Moon $moon)
    {
        $planet = Moon::find($id);
        if ($moon->delete()) {
            return redirect()->route('moons.index')
                ->with('status', $moon->phase . ' Excluída!');
        }
    }
}
