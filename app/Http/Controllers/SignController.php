<?php

namespace App\Http\Controllers;

use App\Sign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SignController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth:admin');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $signs = Sign::all();
        return view('admin.signs_list', compact('signs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
       
        return view('admin.sign_create');
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
            'name' => 'required',
            'description' => 'required',
        ]);
        // obtém os dados do form
        $dados = $request->all();
        $inc = Sign::create($dados);
        if ($inc) {
            return redirect()->route('signs.index')
                ->with('status', $request->name. ' Incluído!');
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function show(Sign $sign)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
        // posiciona no registro a ser alterado e obtém seus dados
        $sign = Sign::find($id);
        return view('admin.sign_edit', compact('sign'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => ['required'],
            'description' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $sign = Sign::find($id);
        // realiza a alteração
        $alt = $sign->update($dados);
        if ($alt) {
            return redirect()->route('signs.index')
                ->with('status', $request->name . ' Alterado!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sign  $sign
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sign = Sign::find($id);
        if ($sign->delete()) {
            return redirect()->route('signs.index')
                ->with('status', $sign->name . ' Excluído!');
        }
    }

    public function image(Request $request) {
        request()->validate([
            'image' => 'required|image|mimes:jpg,jpeg|max:2048',
        ]);

        $id = $request->id;

        $imageName = $id.'.'.request()->image->getClientOriginalExtension();

        request()->image->move(public_path('images/signs'), $imageName);

        return back()
            ->with('success','Imagem enviada com sucesso.')
            ->with('image',$imageName);

    }
}
