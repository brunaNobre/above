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
            ->pause(2000)
            ->type('email', 'admina@gmail.com')
            ->pause(2000)
            ->type('password', '1qwertyu')
            ->pause(2000)
            ->press('Entrar')
            ->pause(2000)
            ->assertPathIs('/admin')
            ->clickLink('Administradora')
            ->pause(2000)
            ->clickLink('Sair')
            ->pause(2000);


                  
        });


    }

    public function testAdminLoginWithNoExistingAdmin() {


        $admin = Admin::find(3);

        $this->browse(function ($browser) use ($admin){


            $browser->visit('admin/login')
            ->type('email', $admin->email)
            ->type('password', $admin->password)
            ->press('Entrar')
            ->assertPathIsNot('/admin');
                  
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
