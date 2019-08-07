<?php

namespace Tests\Browser;

use App\Admin;
use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;



class LoginAdminTest extends DuskTestCase
{

    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testAdminLogin()
    {
        $admin = factory(Admin::class)->create();


        $this->browse(function ($browser) use ($admin) {


            $browser->visit('admin/login')
            ->type('email', $admin->email)
            ->type('password', 'password')
            ->press('Entrar')
            ->assertPathIs('/admin');
                  
        });

        $admin->delete();


    }

    public function testAdminLoginWithNoExistingAdmin() {


        $this->browse(function ($browser) {


            $browser->visit('admin/login')
            ->type('email', 'fake@email.com')
            ->type('password', 'fakepassword')
            ->press('Entrar')
            ->assertPathIsNot('/admin');
                  
        });

    }


    public function testAdminLoginWithNormalUser() {


        $user = factory(User::class)->create();


        $this->browse(function ($browser) use ($user) {


            $browser->visit('admin/login')
            ->type('email', $user->email)
            ->type('password', 'password')
            ->press('Entrar')
            ->assertPathIsNot('/admin');
                  
        });

        $user->delete();

    }



}
