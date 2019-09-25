<?php

namespace App\Http\Controllers;

use App\Advice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AdviceController extends Controller
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
       
        $advices = Advice::all();
        return view('admin.advices_list', compact('advices'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        

        return view('admin.advice_create');
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
            'moon' => 'string',
            'sign' => 'string',
            'advice' => 'required',
        ]);

        

        // obtém os dados do form
        $dados = $request->all();
        $inc = Advice::create($dados);
        if ($inc) {
            return redirect()->route('advices.index')
                ->with('status', 'Dica para ' .$request->moon. ' em ' .$request->sign. ' incluída!');
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
        // posiciona no registro a ser alterado e obtém seus dados
        $advice = Advice::find($id);
        return view('admin.advice_edit', compact('advice'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'moon' => ['required'],
            'sign' => ['required'],
            'advice' => 'required'
        ]);
        // obtém os dados do form
        $dados = $request->all();
        // posiciona no registo a ser alterado
        $advice = Advice::find($id);
        // realiza a alteração
        $alt = $advice->update($dados);
        if ($alt) {
            return redirect()->route('advices.index')
                ->with('status', 'Dica para ' .$request->moon. ' em ' .$request->sign. ' alterada!');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $advice = Advice::find($id);
        if ($advice->delete()) {
            return redirect()->route('advices.index')
                ->with('status', 'Dica para ' .$advice->moon. ' em ' .$advice->sign. ' excluída!');
        }
    }
}
