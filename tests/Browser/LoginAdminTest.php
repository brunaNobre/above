<?php

namespace Tests\Browser;

use App\Admin;
use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Support\Facades\Auth;




class LoginAdminTest extends DuskTestCase
{


    //use RefreshDatabase;

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testAdminLogin()
    {


        $this->browse(function ($browser) {


            $browser->visit('/admin/login')
            ->type('email', 'admina@gmail.com')
            ->type('password', '1qwertyu')
            ->press('Entrar')
            ->assertPathIs('/admin')
            ->clickLink('Administradora')
            ->clickLink('Sair');


                  
        });


    }

 

    public function testAdminLoginWithNormalUser() {


        $user = factory('App\User')->create();


        $this->browse(function ($browser) use ($user) {


            $browser->visit('admin/login')
            ->type('email', $user->email)
            ->type('password', 'password')
            ->press('Entrar')
            ->assertPathIsNot('/admin');
                  
        });


    }



}
