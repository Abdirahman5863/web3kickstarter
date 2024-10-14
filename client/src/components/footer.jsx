import React from "react";
import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <div className="h-screen  m-8 flex justify-between  bg-footer bg-right-bottom bg-auto bg-no-repeat flex-col ">
        <div className="flex justify-between items-center border-y  h-screen border-gray-200 max-sm:flex-col ">
          <Link href="./arts" className="hover:underline hover:text-green-700 ">
            Arts
          </Link>
          <Link href="./arts" className="hover:underline hover:text-green-700">
            Comics and Illustration
          </Link>
          <Link href="./arts" className="hover:underline hover:text-green-700">
            Design & Tech
          </Link>
          <Link href="./arts" className="hover:underline hover:text-green-700">
            Food & Craft
          </Link>
          <Link href="./arts" className="hover:underline hover:text-green-700">
            Games
          </Link>
          <Link href="./arts" className="hover:underline hover:text-green-700">
            Music
          </Link>
          <Link href="./arts" className="hover:underline hover:text-green-700">
            Publishing
          </Link>
        </div>
      <div className="flex justify-center  max-sm:gap-5 gap-16 items-center pt-4 h-screen">
        <div className="flex flex-col gap-4 justify-center">
          <div>
            <h1 className="font-[500] text-black  text-[15px]">ABOUT</h1>
          </div>
          <div className="flex flex-col font-[300]  text-[15px]">
            <Link
              href="./aboutus"
              className="hover:underline hover:text-green-700"
            >
              {" "}
              About us
            </Link>
            <Link
              href="./ourcharters"
              className="hover:underline hover:text-green-700"
            >
              Our charts
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Stats
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Press
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Jobs{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center ">
          <div>
            <h1 className="font-[500] text-black  text-[15px]">SUPPORT</h1>
          </div>
          <div className="flex flex-col  text-[15px] font-[300]">
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Help center
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Our rules
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Creator resources
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Forward refund
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Brand assets
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center sm:gap-0 md:gap-3 lg:gap-4 xl:gap-4">
          <h1 className="font-[500] text-black sm:text-[5px] md:text-[10px] xl:text-[15px] lg:text-[15px] ">
            MORE FROM KICKSTARTER
          </h1>

          <div className="flex flex-col  text-[15px] font-[300]">
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Newsletters
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Kickstarter Project Updates
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              The Creative Independent
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Mobile apps
            </Link>
            <Link
              href="./arts"
              className="hover:underline hover:text-green-700"
            >
              Research
            </Link>
          </div>
        </div>
      </div>
      <div className=" justify-center flex max-sm:flex-col h-screen max-sm:gap-4 items-center w-screen gap-10">
        <div className=" flex  pl-10 xl:gap-4 max-sm:gap-4 justify-center  ">
          <Image src="/k.png" alt="" width={18} height={18} />
          <span>Kickstarter, PBC © 2024</span>
        </div>
        <div className="flex md:gap-3 max-sm:gap-5 justify-center items-center ">
          <Image
            src="/face.png"
            alt=""
            width={18}
            height={18}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/insta.png"
            alt=""
            width={18}
            height={18}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/twitter.png"
            alt=""
            width={18}
            height={18}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/youtube.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
        </div>
        <div class="language-picker js-language-picker  justify-center items-center w-auto flex pb-5 ">
          <form
            action=""
            className="language-picker__form  flex  justify-center items-center md:gap-3 sm:gap-4 lg:gap-4 xl:gap-4   "
          >
            <select
              name="language-picker-select"
              id="language-picker-select class"
              className="flex  hover:border-2 hover:border-slate-400 shadow max-sm:w-[150px]  max-sm:h-6 translate-x-4  bg-slate-50"
            >
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english" selected>
                English
              </option>
              <option lang="fr" value="francais">
                Français
              </option>
              <option lang="it" value="italiano">
                Italiano
              </option>
            </select>
            <select
              className="flex  hover:border-2 form-select hover:border-slate-400 shadow  translate-x-4  bg-slate-50  max-sm:h-6  max-sm:w-[150px]"
              id="currency"
              name="currency"
            >
              <option>select currency</option>
              <option value="AFN">Afghan Afghani</option>
              <option value="ALL">Albanian Lek</option>
              <option value="DZD">Algerian Dinar</option>
              <option value="AOA">Angolan Kwanza</option>
              <option value="ARS">Argentine Peso</option>
              <option value="AMD">Armenian Dram</option>
              <option value="AWG">Aruban Florin</option>
              <option value="AUD">Australian Dollar</option>
              <option value="AZN">Azerbaijani Manat</option>
              <option value="BSD">Bahamian Dollar</option>
              <option value="BHD">Bahraini Dinar</option>
              <option value="BDT">Bangladeshi Taka</option>
              <option value="BBD">Barbadian Dollar</option>
              <option value="BYR">Belarusian Ruble</option>
              <option value="BEF">Belgian Franc</option>
              <option value="BZD">Belize Dollar</option>
              <option value="BMD">Bermudan Dollar</option>
              <option value="BTN">Bhutanese Ngultrum</option>
              <option value="BTC">Bitcoin</option>
              <option value="BOB">Bolivian Boliviano</option>
              <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
              <option value="BWP">Botswanan Pula</option>
              <option value="BRL">Brazilian Real</option>
              <option value="GBP">British Pound Sterling</option>
              <option value="BND">Brunei Dollar</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BIF">Burundian Franc</option>
              <option value="KHR">Cambodian Riel</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CVE">Cape Verdean Escudo</option>
              <option value="KYD">Cayman Islands Dollar</option>
              <option value="XOF">CFA Franc BCEAO</option>
              <option value="XAF">CFA Franc BEAC</option>
              <option value="XPF">CFP Franc</option>
              <option value="CLP">Chilean Peso</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="COP">Colombian Peso</option>
              <option value="KMF">Comorian Franc</option>
              <option value="CDF">Congolese Franc</option>
              <option value="CRC">Costa Rican ColÃ³n</option>
              <option value="HRK">Croatian Kuna</option>
              <option value="CUC">Cuban Convertible Peso</option>
              <option value="CZK">Czech Republic Koruna</option>
              <option value="DKK">Danish Krone</option>
              <option value="DJF">Djiboutian Franc</option>
              <option value="DOP">Dominican Peso</option>
              <option value="XCD">East Caribbean Dollar</option>
              <option value="EGP">Egyptian Pound</option>
              <option value="ERN">Eritrean Nakfa</option>
              <option value="EEK">Estonian Kroon</option>
              <option value="ETB">Ethiopian Birr</option>
              <option value="EUR">Euro</option>
              <option value="FKP">Falkland Islands Pound</option>
              <option value="FJD">Fijian Dollar</option>
              <option value="GMD">Gambian Dalasi</option>
              <option value="GEL">Georgian Lari</option>
              <option value="DEM">German Mark</option>
              <option value="GHS">Ghanaian Cedi</option>
              <option value="GIP">Gibraltar Pound</option>
              <option value="GRD">Greek Drachma</option>
              <option value="GTQ">Guatemalan Quetzal</option>
              <option value="GNF">Guinean Franc</option>
              <option value="GYD">Guyanaese Dollar</option>
              <option value="HTG">Haitian Gourde</option>
              <option value="HNL">Honduran Lempira</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="ISK">Icelandic KrÃ³na</option>
              <option value="INR">Indian Rupee</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="IRR">Iranian Rial</option>
              <option value="IQD">Iraqi Dinar</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="ITL">Italian Lira</option>
              <option value="JMD">Jamaican Dollar</option>
              <option value="JPY">Japanese Yen</option>
              <option value="JOD">Jordanian Dinar</option>
              <option value="KZT">Kazakhstani Tenge</option>
              <option value="KES">Kenyan Shilling</option>
              <option value="KWD">Kuwaiti Dinar</option>
              <option value="KGS">Kyrgystani Som</option>
              <option value="LAK">Laotian Kip</option>
              <option value="LVL">Latvian Lats</option>
              <option value="LBP">Lebanese Pound</option>
              <option value="LSL">Lesotho Loti</option>
              <option value="LRD">Liberian Dollar</option>
              <option value="LYD">Libyan Dinar</option>
              <option value="LTL">Lithuanian Litas</option>
              <option value="MOP">Macanese Pataca</option>
              <option value="MKD">Macedonian Denar</option>
              <option value="MGA">Malagasy Ariary</option>
              <option value="MWK">Malawian Kwacha</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="MVR">Maldivian Rufiyaa</option>
              <option value="MRO">Mauritanian Ouguiya</option>
              <option value="MUR">Mauritian Rupee</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MDL">Moldovan Leu</option>
              <option value="MNT">Mongolian Tugrik</option>
              <option value="MAD">Moroccan Dirham</option>
              <option value="MZM">Mozambican Metical</option>
              <option value="MMK">Myanmar Kyat</option>
              <option value="NAD">Namibian Dollar</option>
              <option value="NPR">Nepalese Rupee</option>
              <option value="ANG">Netherlands Antillean Guilder</option>
              <option value="TWD">New Taiwan Dollar</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="NIO">Nicaraguan CÃ³rdoba</option>
              <option value="NGN">Nigerian Naira</option>
              <option value="KPW">North Korean Won</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="OMR">Omani Rial</option>
              <option value="PKR">Pakistani Rupee</option>
              <option value="PAB">Panamanian Balboa</option>
              <option value="PGK">Papua New Guinean Kina</option>
              <option value="PYG">Paraguayan Guarani</option>
              <option value="PEN">Peruvian Nuevo Sol</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PLN">Polish Zloty</option>
              <option value="QAR">Qatari Rial</option>
              <option value="RON">Romanian Leu</option>
              <option value="RUB">Russian Ruble</option>
              <option value="RWF">Rwandan Franc</option>
              <option value="SVC">Salvadoran ColÃ³n</option>
              <option value="WST">Samoan Tala</option>
              <option value="SAR">Saudi Riyal</option>
              <option value="RSD">Serbian Dinar</option>
              <option value="SCR">Seychellois Rupee</option>
              <option value="SLL">Sierra Leonean Leone</option>
              <option value="SGD">Singapore Dollar</option>
              <option value="SKK">Slovak Koruna</option>
              <option value="SBD">Solomon Islands Dollar</option>
              <option value="SOS">Somali Shilling</option>
              <option value="ZAR">South African Rand</option>
              <option value="KRW">South Korean Won</option>
              <option value="XDR">Special Drawing Rights</option>
              <option value="LKR">Sri Lankan Rupee</option>
              <option value="SHP">St. Helena Pound</option>
              <option value="SDG">Sudanese Pound</option>
              <option value="SRD">Surinamese Dollar</option>
              <option value="SZL">Swazi Lilangeni</option>
              <option value="SEK">Swedish Krona</option>
              <option value="CHF">Swiss Franc</option>
              <option value="SYP">Syrian Pound</option>
              <option value="STD">São Tomé and Príncipe Dobra</option>
              <option value="TJS">Tajikistani Somoni</option>
              <option value="TZS">Tanzanian Shilling</option>
              <option value="THB">Thai Baht</option>
              <option value="TOP">Tongan pa'anga</option>
              <option value="TTD">Trinidad & Tobago Dollar</option>
              <option value="TND">Tunisian Dinar</option>
              <option value="TRY">Turkish Lira</option>
              <option value="TMT">Turkmenistani Manat</option>
              <option value="UGX">Ugandan Shilling</option>
              <option value="UAH">Ukrainian Hryvnia</option>
              <option value="AED">United Arab Emirates Dirham</option>
              <option value="UYU">Uruguayan Peso</option>
              <option value="USD">US Dollar</option>
              <option value="UZS">Uzbekistan Som</option>
              <option value="VUV">Vanuatu Vatu</option>
              <option value="VEF">Venezuelan BolÃ­var</option>
              <option value="VND">Vietnamese Dong</option>
              <option value="YER">Yemeni Rial</option>
              <option value="ZMK">Zambian Kwacha</option>
            </select>
          </form>
        </div>
      </div>
      <div className="flex  items-center justify-center max-sm:flex-col border-t-2 h-screen  gap-10 max-sm:gap-5 w-screen border-slate-300">
        <Link
          href="/"
          className="hover:underline hover:text-green-700 lg:text-[15px]  sm:text-[5px] md:text-[10px]  xl:text-[15px]"
        >
          Trust & Safety
        </Link>
        <Link
          href="/"
          className="hover:underline hover:text-green-700 lg:text-[15px] w-auto sm:text-[5px] md:text-[10px]  xl:text-[15px] "
        >
          Terms of Use
        </Link>
        <Link
          href="/"
          className="hover:underline hover:text-green-700 lg:text-[15px] w-auto sm:text-[5px] md:text-[10px]  xl:text-[15px] flex justify-center"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="hover:underline hover:text-green-700 lg:text-[15px] w-auto sm:text-[5px] md:text-[10px]  xl:text-[15px] flex justify-center"
        >
          Do Not Sell My Personal Information
        </Link>
        <Link
          href="/"
          className="hover:underline hover:text-green-700 lg:text-[15px] w-auto sm:text-[5px] md:text-[10px]  xl:text-[15px] flex justify-center"
        >
          Accessibility Statement
        </Link>
        <Link
          href="/"
          className="hover:underline hover:text-green-700 lg:text-[15px] w-auto sm:text-[5px] md:text-[10px]  xl:text-[15px] flex justify-center"
        >
          CA Notice of Consent
        </Link>
      </div>
    </div>
  );
};

export default footer;
