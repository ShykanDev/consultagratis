<template>
  <MainLayout>
    <template #main>
      <div class="flex justify-center">

        <form
          class="w-fit h-fit flex flex-col items-center justify-center gap-[15px] px-10 pt-[50px] pb-5 bg-white shadow-[0px_106px_42px_rgba(0,0,0,0.01),0px_59px_36px_rgba(0,0,0,0.05),0px_26px_26px_rgba(0,0,0,0.09),0px_7px_15px_rgba(0,0,0,0.1)] rounded-[11px] font-sans">


          <div class="flex flex-col items-center justify-center gap-[10px]">
            <p class="text-lg font-bold text-[#212121] m-0">Inicie sesión en su cuenta</p>
            <span class="text-[0.725rem] leading-[1.1rem] text-center max-w-[80%] text-[#8B8E98]">
              Inicie sesión para acceder a su cuenta y disfrutar de la experiencia.
            </span>
          </div>

          <div class="w-full relative flex flex-col gap-[5px]">
            <label class="text-xs font-semibold text-[#8B8E98]" for="email_field">Email</label>
            <svg class="w-5 absolute z-50 left-3 bottom-[9px]">...</svg>
            <input id="email_field" type="text" placeholder="name@mail.com"
              class="w-auto h-10 pl-10 rounded-[7px] border border-[#e5e5e5] shadow-[0px_1px_0px_#efefef,0px_1px_0.5px_rgba(239,239,239,0.5)] focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#242424] transition-all duration-300 ease-[cubic-bezier(0.15,0.83,0.66,1)]" />
          </div>

          <div class="w-full relative flex flex-col gap-[5px]">
            <label class="text-xs font-semibold text-[#8B8E98]" for="password_field">Password</label>
            <svg class="w-5 absolute z-50 left-3 bottom-[9px]">...</svg>
            <input id="password_field" type="password" placeholder="Password"
              class="w-auto h-10 pl-10 rounded-[7px] border border-[#e5e5e5] shadow-[0px_1px_0px_#efefef,0px_1px_0.5px_rgba(239,239,239,0.5)] focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#242424] transition-all duration-300 ease-[cubic-bezier(0.15,0.83,0.66,1)]" />
          </div>

          <button type="submit" class="w-full h-10 bg-[#115DFC] rounded-[7px] text-white cursor-pointer">
            <span>Sign In</span>
          </button>

          <div class="w-full flex items-center justify-center gap-[30px] text-[#8B8E98]">
            <hr class="flex-1 h-px border-0 bg-[#e8e8e8]" />
            <span>Or</span>
            <hr class="flex-1 h-px border-0 bg-[#e8e8e8]" />
          </div>

          <button type="submit"
            class="w-full h-10 flex items-center justify-center gap-[10px] bg-white rounded-[7px] border border-[#e5e5e5] shadow-[0px_1px_0px_#efefef,0px_1px_0.5px_rgba(239,239,239,0.5)] text-[#242424] cursor-pointer">
            <svg class="w-[18px] h-[18px]">...</svg>
            <span>Sign In with Google</span>
          </button>

          <button type="submit"
            class="w-full h-10 flex items-center justify-center gap-[10px] bg-[#212121] rounded-[7px] border border-[#e5e5e5] shadow-[0px_1px_0px_#efefef,0px_1px_0.5px_rgba(239,239,239,0.5)] text-white cursor-pointer">
            <svg class="w-[16px] h-[20px]">...</svg>
            <span>Sign In with Apple</span>
          </button>

          <a href="#" class="text-xs text-[#8B8E98] underline">Forgot your password?</a>
        </form>


      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
