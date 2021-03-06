/**
 * Driver for Broadlink devices
 *
 * Copyright 2018-2019, R Wensveen
 *
 * This file is part of com.broadlink
 * com.broadlink is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * com.broadlink is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with com.broadlink.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const BroadlinkDriver = require('./../../lib/BroadlinkDriver');
const Homey = require('homey');
//const Util = require('./../../lib/util.js');


class BroadlinkA1Driver extends BroadlinkDriver {

	onInit() {
		super.onInit({
			CompatibilityID: 0x2714   // A1
		});

		this.a1_condition_air_quality = new Homey.FlowCardCondition('a1_air_quality');
		this.a1_condition_air_quality
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_airquality_level(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getAirQualityList('same'); })

		this.a1_condition_air_quality_better = new Homey.FlowCardCondition('a1_air_quality_better');
		this.a1_condition_air_quality_better
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_airquality_level_better(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getAirQualityList('better'); })

		this.a1_condition_air_quality_worse = new Homey.FlowCardCondition('a1_air_quality_worse');
		this.a1_condition_air_quality_worse
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_airquality_level_worse(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getAirQualityList('worse'); })

		this.a1_condition_light_level = new Homey.FlowCardCondition('a1_light_level');
		this.a1_condition_light_level
			.register()
			.registerRunListener( ( args, state ) => { return args.device.check_lightlevel(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getLightLevelList('same'); })

		this.a1_condition_light_level_brighter = new Homey.FlowCardCondition('a1_light_level_brighter');
		this.a1_condition_light_level_brighter
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_lightlevel_brighter(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getLightLevelList('brighter'); })

		this.a1_condition_light_level_darker = new Homey.FlowCardCondition('a1_light_level_darker');
		this.a1_condition_light_level_darker
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_lightlevel_darker(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getLightLevelList('darker'); })

		this.a1_condition_noise_level = new Homey.FlowCardCondition('a1_noise_level');
		this.a1_condition_noise_level
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_noiselevel(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getNoiseLevelList('same'); })

		this.a1_condition_noise_level_louder = new Homey.FlowCardCondition('a1_noise_level_louder');
		this.a1_condition_noise_level_louder
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_noiselevel_louder(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getNoiseLevelList('louder'); })

		this.a1_condition_noise_level_softer = new Homey.FlowCardCondition('a1_noise_level_softer');
		this.a1_condition_noise_level_softer
			.register()
			.registerRunListener(( args, state ) => { return args.device.check_noiselevel_softer(args,state) } )
			.getArgument('variable')
			.registerAutocompleteListener(( query, args ) => { return args.device.getNoiseLevelList('softer'); })


		this.a1_trigger_air_quality = new Homey.FlowCardTriggerDevice('a1_air_quality').register();
		this.a1_trigger_light_level = new Homey.FlowCardTriggerDevice('a1_light_level').register();
		this.a1_trigger_noise_level = new Homey.FlowCardTriggerDevice('a1_noise_level').register();
	}

}

module.exports = BroadlinkA1Driver;
