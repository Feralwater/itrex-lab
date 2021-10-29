const Header = {
    render: async ({user}) => {
        return `
    <div class="header__container">
        <div class="header__logo">
            <svg class="header__logo-image" width="29" height="32" viewBox="0 0 29 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6389 20.3436C20.0798 22.3721 17.4396 23.2755 14.9263 22.8483C12.1752 22.3813 9.91074 20.251 9.28809 17.549C9.84829 20.7099 11.5833 23.542 14.1449 25.4768C15.7695 26.6993 17.6608 27.5191 19.6636 27.8689C21.6665 28.2188 23.7237 28.0887 25.6665 27.4894C26.1936 27.3265 26.7098 27.1304 27.2121 26.9023C27.4309 26.8024 27.646 26.6958 27.8593 26.5842C28.0517 26.4819 28.39 26.3636 28.5334 26.1987L21.762 20.4453L21.6389 20.3436Z"
                      fill="url(#paint0_linear_2:1152)"/>
                <path d="M10.569 4.48178C7.08372 4.36963 3.98332 5.5322 2.25753 7.82671C0.367638 10.9866 -0.368708 14.7039 0.17384 18.3457C0.871264 23.0505 3.63277 27.0886 7.51578 29.5259C5.21024 26.3495 5.17102 22.6577 5.39777 20.7339C6.07191 15.0062 9.7723 12.3103 10.4844 11.8629C11.0775 11.0715 11.8309 10.414 12.6953 9.93335C13.5597 9.45273 14.5158 9.15981 15.5011 9.0737C16.4864 8.98758 17.4788 9.11022 18.4135 9.4336C19.3481 9.75697 20.2041 10.2738 20.9255 10.9504L20.9482 10.9314C18.7352 7.36769 15.0949 4.62641 10.569 4.48178Z"
                      fill="url(#paint1_linear_2:1152)"/>
                <path d="M16.1151 2.69227e-05C13.3257 -0.00473979 10.5827 0.713829 8.15389 2.08559C5.72508 3.45735 3.69346 5.43543 2.25732 7.82673C3.98311 5.53222 7.08352 4.36965 10.5688 4.4818C15.0947 4.62643 18.735 7.36771 20.9505 10.9314L27.8689 5.05359C26.3581 3.45398 24.536 2.18045 22.5146 1.31136C20.4932 0.442272 18.3154 -0.00399333 16.1151 2.69227e-05Z"
                      fill="url(#paint2_linear_2:1152)"/>
                <path d="M27.9366 26.5407C25.1009 28.0686 21.6898 28.4589 18.5747 27.631C15.7034 26.8628 13.1864 25.1247 11.4509 22.7116C9.25939 19.6474 8.05391 15.1209 10.4869 11.8642C9.77235 12.3116 6.07441 15.0075 5.40027 20.7352C5.17536 22.6448 5.21336 26.295 7.46558 29.4542C8.14707 30.0248 9.01976 30.3888 9.8275 30.7296C12.914 32.0301 16.3279 32.3414 19.5988 31.6206C22.8696 30.8998 25.8365 29.1824 28.0904 26.705C28.2383 26.5415 28.3826 26.3761 28.5231 26.2086C28.3307 26.3238 28.1352 26.4345 27.9366 26.5407Z"
                      fill="url(#paint3_linear_2:1152)"/>
                <defs>
                    <linearGradient id="paint0_linear_2:1152" x1="24.0222" y1="18.6417" x2="13.4775" y2="25.334"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFC6BA"/>
                        <stop offset="0.49" stop-color="#E781A6"/>
                        <stop offset="1" stop-color="#79578A"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2:1152" x1="4.12305" y1="19.344" x2="16.6515" y2="7.32969"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFC6BA"/>
                        <stop offset="0.5" stop-color="#E781A6"/>
                        <stop offset="1" stop-color="#79578A"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2:1152" x1="10.6454" y1="3.32229" x2="25.5236" y2="12.8736"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.01" stop-color="#FFC6BA"/>
                        <stop offset="0.5" stop-color="#E781A6"/>
                        <stop offset="1" stop-color="#A66894"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2:1152" x1="19.4615" y1="28.4786" x2="4.41114" y2="17.2603"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A66894"/>
                        <stop offset="0.5" stop-color="#E781A6"/>
                        <stop offset="0.99" stop-color="#FFC6BA"/>
                    </linearGradient>
                </defs>
            </svg>
            <span class="header__logo-text">palm clinic</span>
        </div>
        <div class="header__user">
        <a href="#/sign-in">back</a>
            <div class="header__user-info">
                <p class="header__user-name">${user.firstName + " " + user.secondName}</p>
                <p class="header__user-role">${user.role}</p>
            </div>
            <div class="header__user-img">
                <img src="${user.avatar}" alt="doctor\`s avatar">
                <span class="header__user-online"></span>
            </div>
        </div>
    </div>
        `
    },
    after_render: async () => {
    }

}

export default Header;